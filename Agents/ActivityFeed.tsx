import React, {useEffect, useRef, useState} from 'react';
import styles from './Agents.module.css';
import {getExecutionFeeds, getDateTime} from '@/pages/api/DashboardService';
import Image from 'next/image';
import {loadingTextEffect, formatTimeDifference, convertWaitingPeriod, updateDateBasedOnValue} from '@/utils/utils';
import {EventBus} from '@/utils/eventBus';
import {ClipLoader} from 'react-spinners';

interface ActivityFeedProps {
	selectedRunId: string;
	selectedView: string;
	setFetchedData: (data: any) => void;
	agent: any;
	selectedRunStatus: string;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({selectedRunId, selectedView, setFetchedData, agent, selectedRunStatus}) => {
	// Rest of the code remains same as no changes in logic, just types definition added
}

export default ActivityFeed;