import React from 'react';
import styles from "./Apm.module.css";
import Image from "next/image";
import ajaxCall from "@/pages/api/AjaxCall";

interface BarGraphProps {
  title: string;
  loadingData: any;
  agent: any;
}

const BarGraph: React.FC<BarGraphProps> = ({title, loadingData, agent}) => {
  // Rest of the existing code goes here
  // No changes in the logical part of the code
  // Only definitions of props types are added
}

export default BarGraph;