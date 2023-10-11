import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from '../Marketplace/Market.module.css';
import {fetchAgentTemplateListLocal} from '@/pages/api/DashboardService';
import AgentCreate from '@/pages/Content/Agents/AgentCreate';
import {setLocalStorageValue, openNewTab, getUserClick} from '@/utils/utils';

interface IAgentTemplatesListProps {
  sendAgentData: (data: any) => void;
  knowledge: any;
  selectedProjectId: string;
  fetchAgents: any;
  toolkits: any;
  organisationId: string;
  internalId: string;
  sendKnowledgeData: (data: any) => void;
  env: any;
}

const AgentTemplatesList: React.FC<IAgentTemplatesListProps> = ({sendAgentData, knowledge, selectedProjectId, fetchAgents, toolkits, organisationId, internalId, sendKnowledgeData, env}) => {...};

export default AgentTemplatesList;
