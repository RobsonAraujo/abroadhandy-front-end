"use client";

export default function Space({
  top,
  bottom,
  right,
  left,
}: {
  top?: string | number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
}) {
  return (
    <div
      style={{
        marginTop: top ? 4 * Number(top) : 0,
        marginBottom: bottom ? 4 * Number(bottom) : 0,
        marginRight: right ? 4 * Number(right) : 0,
        marginLeft: left ? 4 * Number(left) : 0,
      }}
    />
  );
}
