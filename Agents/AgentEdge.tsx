import React, { useEffect, useState } from 'react';
import styles from './Agents.module.css';
import Image from 'next/image';
import ajaxCall from '@/pages/api/AjaxCall';

interface AgentEdgeProps {
	selectedAgent: string;
	selectedOperation: string;
}

const AgentEdge: React.FC<AgentEdgeProps> = ({ selectedAgent, selectedOperation }) => {
	// Remaining part of the code remains same as there is no change in logic, just added types definition
}

export default AgentEdge;