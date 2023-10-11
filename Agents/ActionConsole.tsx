import React, {useState, useEffect} from 'react';
import styles from './Agents.module.css';
import Image from 'next/image';
import {updatePermissions} from '@/pages/api/DashboardService';
import {formatTimeDifference} from '@/utils/utils';

interface ActionBoxProps {
  action: any;
  index: number;
  denied: boolean[];
  reasons:string[];
  handleDeny: (index: number) => void;
  handleSelection: (index: number, status: boolean, permissionId: string | number) => void;
  setReasons: React.Dispatch<React.SetStateAction<string[]>>;
}

interface HistoryBoxProps {
  action: any;
}

interface ActionConsoleProps {
  actions: any[];
  pendingPermission: number;
  setPendingPermissions: any;
}

const ActionBox: React.FC<ActionBoxProps> = ({action, index, denied, reasons, handleDeny, handleSelection, setReasons}) => {...
}
const HistoryBox: React.FC<HistoryBoxProps> = ({action}) => {...
};

const ActionConsole: React.FC<ActionConsoleProps> = ({actions, pendingPermission, setPendingPermissions}) => {...
}

export default ActionConsole;
