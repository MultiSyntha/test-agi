import React from 'react';
import styles from './Market.module.css';

interface MarketKnowledgeProps {
	knowledge: any;
	selectedKnowledge: any;
	setSelectedknowledge: (knowledge: any) => void;
}

const MarketKnowledge: React.FC<MarketKnowledgeProps> = ({knowledge, selectedKnowledge, setSelectedKnowledge}) => {
	// The rest of the code remains unchanged
	// Only type definitions are added
}

export default MarketKnowledge;