import React from "react";
import { api } from "@component/utils/api";

function Paginated() {
  let data = [];
  const page1 = api.categories.getPaginated.useQuery({ page: 1 });
  const page2 = api.categories.getPaginated.useQuery({ page: 2 });
  const page3 = api.categories.getPaginated.useQuery({ page: 3 });
  const page4 = api.categories.getPaginated.useQuery({ page: 4 });
  const page5 = api.categories.getPaginated.useQuery({ page: 5 });
  const page6 = api.categories.getPaginated.useQuery({ page: 6 });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col">
        {data.map((idx, item) => (
          <input key={idx} value={item.name} type="radio" />
        ))}
      </div>
      <div className="mx-auto flex flex-row content-around items-center gap-2">
        <div
          onClick={() => {
            data = page1.data;
          }}
          className="rounded border-2 border-gray-500"
        >
          1
        </div>
        <div
          onClick={() => {
            data = page2.data;
          }}
          className="rounded border-2 border-gray-500"
        >
          2
        </div>
        <div
          onClick={() => {
            data = page3.data;
          }}
          className="rounded border-2 border-gray-500"
        >
          3
        </div>
        <div
          onClick={() => {
            data = page4.data;
          }}
          className="rounded border-2 border-gray-500"
        >
          4
        </div>
        <div
          onClick={() => {
            data = page5.data;
          }}
          className="rounded border-2 border-gray-500"
        >
          5
        </div>
        <div
          onClick={() => {
            data = page6.data;
          }}
          className="rounded border-2 border-gray-500"
        >
          6
        </div>
      </div>
    </div>
  );
}

export default Paginated;
