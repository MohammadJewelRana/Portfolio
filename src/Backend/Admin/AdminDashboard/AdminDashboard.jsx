// import React from 'react';
import React, {   useEffect, useState } from "react";

import AdminTitle from "../AdminShared/AdminTitle";
import { FaIndent, FaMobileScreen, FaScrewdriverWrench } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaList, FaNewspaper } from "react-icons/fa";
import useAllProjects from "../../../hooks/useAllProjects";
import Fullstack from "../Pages/Fullstack";

const AdminDashboard = () => {
  const [projects, projectsLoading, refetch] = useAllProjects();
  const frontend = projects.filter((item) => item.category === "Frontend");
  const fullStack = projects.filter((item) => item.category === "Mern");

  const data = [
    {
      name: "  Total Projects",
      uv: projects.length,
    },
    {
      name: "Frontend",
      uv: frontend.length,
    },
    {
      name: "Full Stack",
      uv: fullStack.length,
    },
  ];

  const colors = ["#0088FE", "#00C49F", "red"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <AdminTitle heading={"dashboard"}></AdminTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   f">
        <div className="border bg-purple-400 rounded-lg w-full px-12 py-8 flex items-center justify-center gap-12  ">
          <div>
            <FaList className="text-4xl text-white  " />
          </div>
          <div>
            <p className="text-3xl font-bold">{projects.length}</p>
            <h1 className="text-xl font-semibold">All_Projects</h1>
          </div>
        </div>

        <div className="border bg-blue-400 rounded-lg w-full px-12 py-8 flex items-center justify-center gap-12">
          <div>
            <FaNewspaper className="text-4xl text-white  " />
          </div>
          <div>
            <p className="text-3xl font-bold">{frontend.length}</p>
            <h1 className="text-xl font-semibold">Frontend </h1>
          </div>
        </div>
        <div className="border bg-pink-400 rounded-lg w-full px-12 py-8 flex items-center justify-center gap-12">
          <div>
            <FaScrewdriverWrench className="text-4xl text-white  " />
          </div>
          <div>
            <p className="text-3xl font-bold">{fullStack.length}</p>
            <h1 className="text-xl font-semibold"> Full_Stack </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-8 mt-12 flex" style={{ width: "100%" }}>
        <div className="mx-auto overflow-x-auto ">
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
