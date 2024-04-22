function Table() {
  return (
    <>
      <div>
        <label className="cursor-pointer ml-[1400px] pt-[25px] grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <div className="mockup-browser border mt-10 bg-base-300 hover:text-white">
        <div className="mockup-browser-toolbar">
          <div className="input">
            https://www.figma.com/file/onOhBlK3r7QkdLtPn6LdBw/Login-%26-Registration-Ui-Kit-%E2%80%94-light-and-dark-(Community)?type=design&node-id=1-826&mode=design&t=uzfVBGeH2P599a8c-0
          </div>
        </div>
        <div className="">
          <div role="tablist" className="tabs tabs-lifted">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Zuhriddin</td>
                    <td>Zuhriddin@gmail.com</td>
                    <td>123</td>
                  </tr>
                  <tr className="hover">
                    <th>2</th>
                    <td>Najot ta'lim</td>
                    <td>Najot_talim@gmail.com</td>
                    <td>12345</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Frontend</td>
                    <td>Frontend@gmail.com</td>
                    <td>1234567890</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
