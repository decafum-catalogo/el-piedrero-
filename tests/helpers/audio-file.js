import assert from 'node:assert/strict';

/** Lee metadatos del contenedor real; no sustituye probar la decodificación en el navegador. */
export function audioMetadata(buffer) {
  if (buffer.toString('ascii', 0, 4) === 'OggS') {
    let offset = 0, samples = 0n, preSkip, end = false;
    while (offset < buffer.length) {
      assert.equal(buffer.toString('ascii', offset, offset + 4), 'OggS');
      const segments = buffer[offset + 26];
      const body = offset + 27 + segments;
      let size = 0;
      for (let i = 0; i < segments; i++) size += buffer[offset + 27 + i];
      assert.ok(body + size <= buffer.length, 'Página Ogg completa');
      if (offset === 0) {
        assert.equal(buffer.toString('ascii', body, body + 8), 'OpusHead');
        preSkip = buffer.readUInt16LE(body + 10);
      }
      const granule = buffer.readBigUInt64LE(offset + 6);
      if (granule !== 0xffffffffffffffffn && granule > samples) samples = granule;
      end ||= !!(buffer[offset + 5] & 4);
      offset = body + size;
    }
    assert.ok(end, 'El archivo Opus tiene una página de cierre');
    const duration = (Number(samples) - preSkip) / 48000;
    assert.ok(duration > 0 && Number.isFinite(duration));
    return { format: 'opus', duration };
  }
  assert.equal(buffer.toString('ascii', 0, 4), 'RIFF');
  assert.equal(buffer.toString('ascii', 8, 12), 'WAVE');
  let offset = 12, byteRate, dataSize;
  while (offset + 8 <= buffer.length) {
    const size = buffer.readUInt32LE(offset + 4), name = buffer.toString('ascii', offset, offset + 4);
    if (name === 'fmt ') byteRate = buffer.readUInt32LE(offset + 16);
    if (name === 'data') dataSize = size;
    offset += 8 + size + size % 2;
  }
  const duration = dataSize / byteRate;
  assert.ok(duration > 0 && Number.isFinite(duration));
  return { format: 'wav', duration };
}
