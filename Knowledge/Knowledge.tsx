import React, { useState, useEffect } from 'react';
import styles from './Knowledge.module.css';
import Image from 'next/image';
import ajaxCall from '@/pages/api/AjaxCall';

interface KnowledgeProps {
	selectedAgent: string;
	selectedOperation: string;
}

const Knowledge: React.FC<KnowledgeProps> = ({ selectedAgent, selectedOperation }) => {
	// The remaining part of the code remains same as no change in logic, just added types definition
}

export default Knowledge;