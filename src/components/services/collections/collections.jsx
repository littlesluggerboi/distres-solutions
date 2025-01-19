import styles from "./collections.module.css";

const Collections = () => {
  return (
    <>
      <div className={styles.collections}>
        <table>
          <tr>
            <th>Collection Item</th>
            <th>Price per Unit</th>
            <th>Unit Measurement</th>
          </tr>
          <tr>
            <td>A.&ensp;Pharmaceutical Wastes</td>
            <td>500</td>
            <td>Kilograms</td>
          </tr>
          <tr>
            <td>B.&ensp;Radioactive Wastes</td>
            <td>750</td>
            <td>Kilogram</td>
          </tr>
          <tr>
            <td>C.&ensp;Infectious Wastes</td>
            <td>300</td>
            <td>Kilogram</td>
          </tr>
          <tr>
            <td>D.&ensp;Busted Flourescent Lamp</td>
            <td>200</td>
            <td>Cart</td>
          </tr>
          <tr>
            <td>E.&ensp;Householde Residual Wastes</td>
            <td>300</td>
            <td>Kilogram</td>
          </tr>
          <tr>
            <td>F.&ensp;Organic Waste</td>
            <td>300</td>
            <td>Kilogram</td>
          </tr>
          <tr>
            <td>G.&ensp;Waste Water</td>
            <td>1000</td>
            <td>Cubic Meter</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Collections;
