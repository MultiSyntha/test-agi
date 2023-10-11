import React, {useState, useEffect} from 'react';
import styles from './Agents.module.css';
import Image from 'next/image';
import {updatePermissions} from '@/pages/api/DashboardService';
import {formatTimeDifference} from '@/utils/utils';

interface ActionBoxProps {
  action: any;
  index: number;
  denied: boolean[];
  reasons: string[];
  handleDeny: (index: number) => void;
  handleSelection: (index: number, status: boolean, permissionId: string) => void;
  setReasons: (reasons: string[]) => void;
}

const ActionBox: React.FC<ActionBoxProps> = ({action, index, denied, reasons, handleDeny, handleSelection, setReasons}) => {
  const isDenied = denied[index];
  return (/* existing jsx */);
}

interface HistoryBoxProps {
  action: any;
}

const HistoryBox: React.FC<HistoryBoxProps> = ({action}) => { /* existing jsx */ }

interface ActionConsoleProps {
  actions: any[];
  pendingPermission: any;
  setPendingPermissions: (permission: any) => void;
}

const ActionConsole: React.FC<ActionConsoleProps> = ({actions, pendingPermission, setPendingPermissions}) => {
  const [hiddenActions, setHiddenActions] = useState([]);
  const [denied, setDenied] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [localActionIds, setLocalActionIds] = useState([]);

  /* existing logic */

  return /* existing jsx */;
}

export default ActionConsole;