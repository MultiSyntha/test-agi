import React from 'react';
import Image from "next/image";
import styles from '../Toolkits/Tool.module.css';
import styles1 from '../Agents/Agents.module.css'
import {createInternalId, getUserClick} from "@/utils/utils";

interface KnowledgeProps {
  sendKnowledgeData: (data: any) => void,
  knowledge: any[],
}

const Knowledge: React.FC<KnowledgeProps> = ({sendKnowledgeData, knowledge}) => {...};

export default Knowledge;
