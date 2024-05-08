import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <div className={css.table_cont}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th_page}>Type</th>
            <th className={css.th_page}>Amount</th>
            <th className={css.th_page}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {items.map(first => {
            return (
              <tr key={first.id}>
                <td className={css.td}>{first.type}</td>
                <td className={css.td}>{first.amount}</td>
                <td className={css.td}>{first.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
