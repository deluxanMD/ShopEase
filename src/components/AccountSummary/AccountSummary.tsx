import {View, Text} from 'react-native';
import React from 'react';
import styles from './AccountSummaryStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

interface SectionProps {
  title: string;
  value: string;
  bold?: boolean;
}

const Section = ({title, value, bold = false}: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.title}>{title}</Text>
    <Text
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{fontWeight: bold ? 'bold' : 'normal'}]}>
      {value}
    </Text>
  </View>
);

const AccountSummary = () => {
  const accounts = useSelector((state: RootState) => state.cart.accounts);

  return (
    <View style={styles.container}>
      <Section title="Subtotal" value={`$${accounts.subtotal.toFixed(2)}`} />
      <Section
        title="Shipping Cost"
        value={`$${accounts.shippingCost.toFixed(2)}`}
      />
      <Section title="Tax" value={`$${accounts.tax.toFixed(2)}`} />
      <Section title="Total" value={`$${accounts.total.toFixed(2)}`} bold />
    </View>
  );
};

export default AccountSummary;
