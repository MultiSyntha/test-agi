import React, {useState, useEffect} from 'react';
import KnowledgeForm from '@/pages/Content/Knowledge/KnowledgeForm';

interface AddKnowledgeProps {
  internalId: number | string,
  sendKnowledgeData: () => void,
}

const AddKnowledge: React.FC<AddKnowledgeProps> = ({internalId, sendKnowledgeData}) => {...};

export default AddKnowledge;
