function Account() {
  return (
    <div className="Account">
      <div className="header">
        <h1>Account</h1>
      </div>
      <div className="account-info-container">
        <div className="social-container">
          <h3>Github</h3>
          <a href="https://github.com/MaxwellConway">
            https://github.com/MaxwellConway
          </a>
        </div>
        <div className="social-container">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/maxwell-conway-04a74520b/">
            https://www.linkedin.com/in/maxwell-conway-04a74520b/
          </a>
        </div>
        <div className="social-container">
          <h3>Dev.to</h3>
          <a href="https://dev.to/maxwellconway">
            https://dev.to/maxwellconway
          </a>
        </div>
      </div>
    </div>
  );
}

export default Account;
