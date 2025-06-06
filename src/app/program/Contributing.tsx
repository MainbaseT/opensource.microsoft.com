//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export default function Contributing() {
  return (
    <div className="pb-6">
      <h3 className="h3 mb-4">Contributing to open source</h3>
      <p>
        <em>
          This is a summary of how we approach contributing to open source at Microsoft.
        </em>
      </p>
      <p>
        {`
        We encourage our employees to contribute to open source communities. Contributing
        improvements to projects we use enhances the value everyone derives from the project
        and can drive a project forward.
        `}
      </p>
      <p>
        Microsoft's contribution policy varies depending on the size and purpose of contribution.
      </p>
      <ul className="ul mt-4">
        <li>
          <b>Small changes:</b> 
          {`
          If your contribution meets the "Small Contribution Exception", just 
          create a fork, make the fix, and submit a pull request. If making the pull 
          request on GitHub, you can create the fork in your personal GitHub account, rather 
          than an official corporate organization account.
          `}
        </li>
        <li>
          <b>Larger changes:</b>
          {`
          If the contribution is larger, your contribution should be reviewed and approved. There
          is a contribution request form that will kick of a business and legal review process, 
          how to scope the request. The process will include
          reviewing the contributor guide and the CLA for the project.
          `}
        </li>
        <li>
          <b>Meet Community On Its Own Terms:</b>
          {`
          Note that different open source communities take contributions in different ways. 
          Before firing off a pull request, investigate how best to engage the community you 
          will be contributing back to.
          `}
        </li>
        <li>
          <b>Fork Nicely:</b> 
          {`
          Always try to contribute to a community instead of hard 
          forking. Review internal guidelines and training before forking into an official GitHub org.
          `}
        </li>
      </ul>
    </div>
  );
}
