import React from 'react';
import styles from './Market.module.css';

interface AgentTemplateProps {
	agent: any;
	selectedAgent: any;
	setSelectedAgent: (agent: any) => void;
}

const AgentTemplate: React.FC<AgentTemplateProps> = ({agent, selectedAgent, setSelectedAgent}) => {
	// The rest of the code remains unchanged
	// Only type definitions are added
}

export default AgentTemplate;