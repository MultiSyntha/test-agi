import React from 'react';
import styles from './Market.module.css';

interface MarketAgentProps {
	agent: any;
	selectedAgent: any;
	setSelectedAgent: (agent: any) => void;
}

const MarketAgent: React.FC<MarketAgentProps> = ({agent, selectedAgent, setSelectedAgent}) => {
	// The rest of the code remains unchanged
	// Only type definitions are added
}

export default MarketAgent;