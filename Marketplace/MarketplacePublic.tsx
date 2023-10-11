import React from 'react';
import Image from 'next/image';
import styles from './Market.module.css';
import Market from './Market';

interface MarketplacePublicProps {
  env: string;
}

const MarketplacePublic: React.FC<MarketplacePublicProps> = ({env}) => {...};

export default MarketplacePublic;
