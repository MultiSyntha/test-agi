import React, {useState, useMemo} from 'react';
import Image from 'next/image';
import styles from './Agents.module.css';
import {fetchAgentTemplateListLocal} from '@/pages/api/DashboardService';
import AgentCreate from '@/pages/Content/Agents/AgentCreate';
import {setLocalStorageValue, openNewTab, getUserClick} from '@/utils/utils';

interface IResourceListProps {
  files: any[],
  channel: string,
  runs: Record<string, any>[],
}

const ResourceList: React.FC<IResourceListProps> = ({files, channel, runs}) => {...};

export default ResourceList;
