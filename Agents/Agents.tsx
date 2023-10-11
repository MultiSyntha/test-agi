import React from 'react';
import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';
import {createInternalId, getUserClick} from '@/utils/utils';
import mixpanel from 'mixpanel-browser';

interface IAgentsProps {
  sendAgentData: (data: any) => void;
  agents: any[];
}

const Agents: React.FC<IAgentsProps> = ({sendAgentData, agents}) => {...};

export default Agents;
