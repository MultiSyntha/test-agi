import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './Market.module.css';
import styles1 from '../Knowledge/Knowledge.module.css';
import {EventBus} from '@/utils/eventBus';
import {loadingTextEffect} from '@/utils/utils';
import axios from 'axios';
import {fetchKnowledgeTemplateList} from '@/pages/api/DashboardService';

interface MarketKnowledgeProps {
  sendKnowledgeData: (data: any) => void,
  knowledge: any[],
}

const MarketKnowledge: React.FC<MarketKnowledgeProps> = ({sendKnowledgeData, knowledge}) => {...};

export default MarketKnowledge;
