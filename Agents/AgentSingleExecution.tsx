import React, { useState, useEffect } from 'react';
import styles from './Agents.module.css';
import Image from 'next/image';
import ajaxCall from '@/pages/api/AjaxCall';

interface AgentSingleExecutionProps {
	selectedAgent: string;
	opType: string;
}

const AgentSingleExecution: React.FC<AgentSingleExecutionProps> = ({ selectedAgent, opType }) => {
	// The remaining part of the code remains same as no change in logic, just added types definition
}

export default AgentSingleExecution;