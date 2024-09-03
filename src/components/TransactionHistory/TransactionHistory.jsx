import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={s.wrapper}>
        <thead className={s.title}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className={s.colorRow} key={item.id}>
              <td className={s.collums}>{item.type}</td>
              <td className={s.collums}>{item.amount}</td>
              <td className={s.collums}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
