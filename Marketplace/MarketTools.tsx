import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {fetchToolTemplateList} from '@/pages/api/DashboardService';
import {EventBus} from '@/utils/eventBus';
import {loadingTextEffect, excludedToolkits, returnToolkitIcon} from '@/utils/utils';
import axios from 'axios';

interface MarketToolsProps {
  sendToolData: (data: any) => void,
  tools: any[],
}

const MarketTools: React.FC<MarketToolsProps> = ({sendToolData, tools}) => {...};

export default MarketTools;
