import React from "react";

const CakeDetail = () => {
  const cake = props.cake;
  const cakeName = `${cake.cake_name} `;
  return (
    <div className="cake col-xs-10">
      <div>
        <h3>Classic cake</h3>
        <img src="" className="img-thumbnail" alt="" />
      </div>

      {/* ----------------------------- */}

      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Flavours</th>
          </tr>
        </thead>
        {/* --------------- */}
        <tbody>
          <tr>
            <td>Message on cake</td>
            <td>Special notes</td>
            <td>
              <button className="btn" style={{ backgroundColor: "blue" }} />
            </td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td>
              <button className="btn" style={{ backgroundColor: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CakeDetail;
