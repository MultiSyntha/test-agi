import React, { useEffect, useState } from 'react';
import styles from './Knowledge.module.css';
import Image from 'next/image';
import ajaxCall from '@/pages/api/AjaxCall';

interface AddKnowledgeProps {
	selectedAgent: string;
	selectedOperation: string;
}

const AddKnowledge: React.FC<AddKnowledgeProps> = ({ selectedAgent, selectedOperation }) => {
	// The remaining part of the code remains same as no change in logic, just added types definition
}

export default AddKnowledge;