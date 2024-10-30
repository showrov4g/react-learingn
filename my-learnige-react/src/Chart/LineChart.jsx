import { data } from "autoprefixer";
import React from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const mathMarks = [
    {
      studentId: 1,
      name: "Alice Johnson",
      mathMarks: 85,
      banglaMarks: 90,
      englishMarks: 88,
      accountingMarks: 92,
      historyMarks: 87,
      managementMarks: 90,
      financeMarks: 91,
    },
    {
      studentId: 2,
      name: "Bob Smith",
      mathMarks: 78,
      banglaMarks: 82,
      englishMarks: 76,
      accountingMarks: 80,
      historyMarks: 75,
      managementMarks: 79,
      financeMarks: 74,
    },
    {
      studentId: 3,
      name: "Charlie Brown",
      mathMarks: 92,
      banglaMarks: 85,
      englishMarks: 90,
      accountingMarks: 95,
      historyMarks: 88,
      managementMarks: 92,
      financeMarks: 89,
    },
    {
      studentId: 4,
      name: "Dana White",
      mathMarks: 88,
      banglaMarks: 87,
      englishMarks: 91,
      accountingMarks: 84,
      historyMarks: 90,
      managementMarks: 86,
      financeMarks: 85,
    },
    {
      studentId: 5,
      name: "Edward Green",
      mathMarks: 74,
      banglaMarks: 79,
      englishMarks: 75,
      accountingMarks: 76,
      historyMarks: 80,
      managementMarks: 78,
      financeMarks: 77,
    },
    {
      studentId: 6,
      name: "Fiona Blue",
      mathMarks: 95,
      banglaMarks: 93,
      englishMarks: 94,
      accountingMarks: 99,
      historyMarks: 92,
      managementMarks: 97,
      financeMarks: 95,
    },
    {
      studentId: 7,
      name: "George Black",
      mathMarks: 81,
      banglaMarks: 80,
      englishMarks: 82,
      accountingMarks: 83,
      historyMarks: 81,
      managementMarks: 85,
      financeMarks: 84,
    },
    {
      studentId: 8,
      name: "Hannah Grey",
      mathMarks: 90,
      banglaMarks: 91,
      englishMarks: 89,
      accountingMarks: 90,
      historyMarks: 88,
      managementMarks: 91,
      financeMarks: 92,
    },
    {
      studentId: 9,
      name: "Ian Red",
      mathMarks: 76,
      banglaMarks: 78,
      englishMarks: 80,
      accountingMarks: 77,
      historyMarks: 74,
      managementMarks: 76,
      financeMarks: 78,
    },
    {
      studentId: 10,
      name: "Julia Orange",
      mathMarks: 89,
      banglaMarks: 84,
      englishMarks: 90,
      accountingMarks: 88,
      historyMarks: 85,
      managementMarks: 87,
      financeMarks: 90,
    },
  ];

  return (
    <div>
      <LChart width={500} height={500} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathMarks" stroke="yellow"></Line>
        <Line dataKey="financeMarks" stroke="green"></Line>
        <Line dataKey="managementMarks" stroke="brown"></Line>
        <Line dataKey="historyMarks" stroke="blue"></Line>
        <Line dataKey="accountingMarks" stroke="red"></Line>
        <Line dataKey="banglaMarks" stroke="aquae"></Line>
        <Line dataKey="englishMarks" stroke="white"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
