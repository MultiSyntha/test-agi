import React from 'react';
import styles from './Market.module.css';

interface knowledgeTemplateProps {
	knowledge: any;
	selectedKnowledge: any;
	setSelectedKnowledge: (knowledge: any) => void;
}

const KnowledgeTemplate: React.FC<KnowledgeTemplateProps> = ({knowledge, selectedKnowledge, setSelectedKnowledge}) => {
	// The rest of the code remains unchanged
	// Only type definitions are added
}

export default KnowledgeTemplate;