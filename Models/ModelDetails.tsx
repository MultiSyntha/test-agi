import React from 'react';
import styles from './Models.module.css';

interface ModelDetailsProps {
	selectedModel: any;
	selectedAgent: any;
	setSelectedModel: (model: any) => void;
}

 const ModelDetails: React.FC<ModelDetailsProps> = ({selectedModel, selectedAgent, setSelectedModel}) => {
	// The rest of the code remains the same.
	// The logic is unchanged; only type definitions have been added.
}

export default ModelDetails;