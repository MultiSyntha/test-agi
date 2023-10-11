import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from '../Toolkits/Tool.module.css';
import styles3 from '../Agents/Agents.module.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles2 from './Market.module.css';
import {checkToolkitUpdate, fetchToolTemplateOverview, installToolkitTemplate, updateMarketplaceToolTemplate} from '@/pages/api/DashboardService';
import {EventBus} from '@/utils/eventBus';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import {returnToolkitIcon} from '@/utils/utils';

interface ToolkitTemplateProps {
  template: any;
  env: string;
}

const ToolkitTemplate: React.FC<ToolkitTemplateProps> = ({template, env}) => {...};

export default ToolkitTemplate;
