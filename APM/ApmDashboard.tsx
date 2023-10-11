import React, { useState, useEffect } from 'react';
import styles from './Apm.module.css';
import Image from 'next/image';
import { getRunExecutions } from '@/pages/api/DashboardService';
import { formatTimeDifference } from '@/utils/utils';

interface ApmDashboardProps {
	selectedAgent: any;
	selectedAgentRun: any;
	setSelectedAgentRun: (run: any) => void;
	executionSelectable: boolean;
}

const ApmDashboard: React.FC<ApmDashboardProps> = ({selectedAgent, setSelectedAgentRun, selectedAgentRun, executionSelectable }) => {
	/* Remainder of the code remains same as no changes in logic, just types definition added */
}

export default ApmDashboard;