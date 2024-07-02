export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView for the buffer
  const view = new DataView(buffer);
  
  // Check if the position is within the bounds of the buffer
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  
  // Set the Int8 value at the specified position
  view.setInt8(position, value);
  
  return view;
}
