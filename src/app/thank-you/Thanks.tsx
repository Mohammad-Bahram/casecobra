"use client";

const Thanks = ({ num }: { num: number }) => {
  return (
    <>
      <h1 className="mx-auto text-3xl absolute top-[35%] left-[50%] -translate-x-[50%] -translate-y-[-50%]">
        Thanks for choosing and trusting  us ;) {num}
      </h1>
    </>
  );
};

export default Thanks;
