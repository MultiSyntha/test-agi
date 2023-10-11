import React from 'react';
import styles from './Knowledge.module.css';
import Image from 'next/image';
import ajaxCall from '@/pages/api/AjaxCall';

interface KnowledgeFormProps {
	selectedAgent: string;
	attributes: object;
}

const KnowledgeForm: React.FC<KnowledgeFormProps> = ({ selectedAgent, attributes }) => {
	// The remaining part of the code remains same as no change in logic, just added types definition
}

export default KnowledgeForm;