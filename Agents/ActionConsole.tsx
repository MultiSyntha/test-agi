import React, { useState, useEffect } from 'react';
import { Stack, Text, TextField, PrimaryButton, DefaultButton, ImageIcon } from '@fluentui/react';
import updatePermissions from '@/pages/api/DashboardService';
import { formatTimeDifference } from '@/utils/utils';

interface Action {
  id: string;
  question: string;
  tool_name: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  user_feedback: string;
  time_difference: string;
}

interface ActionBoxProps {
  action: Action;
  index: number;
  denied: boolean[];
  reasons: string[];
  handleDeny: (index: number) => void;
  handleSelection: (index: number, status: boolean, permissionId: string) => void;
  setReasons: (reasons: string[]) => void;
}

const ActionBox: React.FC<ActionBoxProps> = ({ action, index, denied, handleDeny, handleSelection, setReasons, reasons }) => {
  const handleStatusChange = (status: boolean) => {
    handleSelection(index, status, action.id);
  };
  const isDenied = denied[index];
  const handleInputChange = (index: number, value: string) => {
    const newReasons = [...reasons];
    newReasons[index] = value;
    setReasons(newReasons);
  };
  return (
    <Stack>
      <Text>{action.question}</Text>
      {isDenied && <TextField label='Provide Feedback' onChange={value => handleInputChange(index, value)} />}
      {isDenied ? (
        <Stack horizontal>
          <DefaultButton text='Go Back' onClick={() => handleDeny(index)} />
          <DefaultButton text='Proceed to Deny' onClick={() => handleSelection(index, false, action.id)} />
        </Stack>
      ) : (
        <Stack horizontal>
          <PrimaryButton text='Approve' onClick={() => handleSelection(index, true, action.id)} />
          <DefaultButton text='Deny' onClick={() => handleDeny(index)} />
        </Stack>
      )}
      <Text>{formatTimeDifference(action.time_difference)}</Text>
    </Stack>
  );
};

interface HistoryBoxProps {
  action: Action;
}

const HistoryBox: React.FC<HistoryBoxProps> = ({ action }) => {
  return (
    <Stack>
      <Text>Permissions for {action.tool_name} was:</Text>
      <Text>{action.status}</Text>
      <Text>{action.user_feedback}</Text>
      <Text>{formatTimeDifference(action.time_difference)}</Text>
    </Stack>
  );
};

interface ActionConsoleProps {
  actions: Action[];
  pendingPermission: number;
  setPendingPermissions: (pendingPermissions: number) => void;
}

const ActionConsole: React.FC<ActionConsoleProps> = ({ actions, pendingPermission, setPendingPermissions }) => {
  const [hiddenActions, setHiddenActions] = useState([]);
  const [denied, setDenied] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [localActionIds, setLocalActionIds] = useState([]);

  useEffect(() => {
    const updatedActions = actions?.filter((action) => !localActionIds.includes(action.id));

    if (updatedActions && updatedActions.length > 0) {
      setLocalActionIds((prevIds) => [...prevIds, ...updatedActions.map(({id}) => id)]);

      setDenied((prevDenied) => prevDenied.map((value, index) => updatedActions[index] ? false : value));
      setReasons((prevReasons) => prevReasons.map((value, index) => updatedActions[index] ? '' : value));
    }
  }, [actions]);

  const handleDeny = (index: number) => {
    setDenied((prevDenied) => {
      const newDeniedState = [...prevDenied];
      newDeniedState[index] = !newDeniedState[index];
      return newDeniedState;
    });
  };

  const handleSelection = (index: number, status: boolean, permissionId: string) => {
    setHiddenActions((prevHiddenActions) => [...prevHiddenActions, index]);

    const data = {
      status: status,
      user_feedback: reasons[index],
    };

    updatePermissions(permissionId, data).then((response) => {
      if (response.status === 200)
        setPendingPermissions(pendingPermission - 1)
    });
  };

  return (
    <Stack>
      {actions && actions.length > 0 ? actions.map((action, index) => {
        if (action.status === 'PENDING' && !hiddenActions.includes(index)) {
          return (<ActionBox key={action.id} action={action} index={index} denied={denied} setReasons={setReasons} reasons={reasons} handleDeny={handleDeny} handleSelection={handleSelection}/>);
        } else if (action.status === 'APPROVED' || action.status === 'REJECTED') {
          return (<HistoryBox key={action.id} action={action}/>);
        }
        return null;
      }) : <Text>No Actions to Display!</Text>}
    </Stack>
  );
};

export default ActionConsole;