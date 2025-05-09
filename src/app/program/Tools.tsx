//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export default function Tools() {
  return (
    <div className="pb-6">
      <h3 className="h3 mb-4">Tools &amp; Services</h3>
      <p>
        {`
        Microsoft uses many tools and services in supporting its open source program. Here are
        just a few that you may find useful in your own company or open source community.
        `}
      </p>
      <h4 className="h4">GitHub Enterprise Cloud with SAML single-sign on</h4>
      <p>
        {`
        Microsoft has over 100 GitHub organizations dedicated to
        open source activities. Collectively, these are part of an
        enterprise account at GitHub.
        `}
      </p>
      <p>
        Some of the features the enterprise product brings to us include:
      </p>
      <ul className="ul mt-4">
        <li><strong>SAML single sign-on</strong>{' '}
        {`
          adds an additional layer of protection for Microsoft by
          connecting with Microsoft's Azure Active Directory system,
          verifying access and protecting access tokens and SSH keys.
          `}
        </li>
        <li><strong>Secure supply chain features</strong>{' '}
        {`
          such as private repo secret scanning help to discover
          accidental check-in of credentials, while vulnerability
          notifications and built-in dependency update pull request capabilities
          help projects to stay in the best shape.
        `}
        </li>
      </ul>
      <h4 className="h4">GitHub Actions and Azure Pipelines</h4>
      <p>
        {`
        While Microsoft uses many different continuous integration systems, and
        open source projects adopt whatever common toolset an open source community
        prefers, many projects are powered by GitHub Actions and Azure Pipelines.
        `}
      </p>
      <ul className="ul mt-4">
        <li><strong><a
          href="https://github.com/features/actions"
          rel="noopener"
          target="_blank">GitHub Actions</a></strong> are{' '}
          the preferred way for projects to{' '}
          build and validate. Being built-in to the GitHub experience for developers,{' '}
          configuration is quick and easy.
        </li>
        <li><strong><a
          target="_blank"
          rel="noopener"
          href="https://azure.microsoft.com/services/devops/pipelines/">Azure Pipelines</a></strong>{' '}
          can be exposed to public, open communities,{' '}
          allowing many Microsoft projects to continue using the build system they've been{' '}
          using for many years, but with a collaborative angle.
        </li>
      </ul>
      <h4 className="h4">Component Governance</h4>
      <p>
        At Microsoft, a internal extension for Azure DevOps called Component Governance{' '}
        was created to help provide automatic inventory of all the open source components{' '}
        used.
      </p>
      <ul className="ul mt-4">
        <li><strong>Automatic inventory registration:</strong> every build at Microsoft{' '}
          is connected to Component Governance. Detected open source is registered,{' '}
          enabling teams to trace a specific build to the bill of materials it contained,{' '}
          and providing historical snapshots and build-by-build analysis of change. The{' '}
          automatic inventory is connected to an alerting system and business review system as needed.
        </li>
        <li><strong>Security alerts:</strong> by connecting to security data sources,{' '}
          public known vulnerability data such as CVEs, and curated Microsoft-internal security knowledge,{' '}
          alerts can be raised at any time to help engineers protect Microsoft and its customers.
        </li>
        <li><strong>Legal alerts:</strong> open source license data and algorithms specific{' '}
          to Microsoft's open source approach are used to generate alerts when specific components{' '}
          have additional legal obligations or requirements, such as publishing third-party source{' '}
          disclosures to <a
            href="https://3rdpartycode.microsoft.com/"
            rel="noopener"
            target="_blank">https://3rdpartycode.microsoft.com/</a>.
        </li>
        <li><strong>Business review process:</strong> a legal and business review process,{' '}
          implemented as Azure Boards work items, is used for certain uses of open source.
        </li>
      </ul>
      <h4 className="h4">GitHub Bots</h4>
      <p>
        Many different bots and applications are used as part of Microsoft's open source{' '}
        program. Bots help teams to scale and provide a great experience for communities.
      </p>
      <p>
        Some of the common building blocks for GitHub Bots used at Microsoft include:
      </p>
      <ul className="ul mt-4">
        <li><a href="https://github.com/probot/probot" target="_blank" rel="noopener" className="external">Probot</a>:
          {' '}
          framework for building GitHub Apps to automate and improve your workflow
        </li>
        <li><a href="https://github.com/octokit/rest.js/"
          target="_blank" rel="noopener" className="external">octokit/rest.js</a>:{' '}
          REST API client for JavaScript and{' '}
          Node.js apps to connect to GitHub
        </li>
        <li><a href="https://github.com/octokit/octokit.net" rel="noopener" target="_blank" className="external">Octokit.net</a>:{' '}
          for .NET applications to integrate with GitHub
        </li>
      </ul>
      <h4 className="h4">Self-service GitHub open source portal</h4>
      <p>
        When interfacing with third-party services such as GitHub, it is important to be able to identify{' '}
        employees at the same company working together on open source.
      </p>
      <p>
        While GitHub allows organization members to publicize their organization membership on their{' '}
        individual profile, there is more to know. GitHub user management solutions will offer the following{' '}
        capabilities:
      </p>
      <ul className="ul mt-4">
        <li><b>Employment lifecycle automation:</b> Employees should be able to join a company organization,{' '}
          if authorized, without needing a manual invitation. When an employee decides to leave the{' '}
          company, their access to company resources and GitHub organization membership should be removed.
        </li>
        <li><b>User linking:</b> Authenticating an employee with IT and also GitHub to associate the GitHub{' '}
          account
        </li>
        <li><b>Communications:</b> By linking an employee's corporate identity with their GitHub account,{' '}
          comms are possible without having to ask the user to share their email address or other{' '}
          information on their public profile.
        </li>
      </ul>
      <p>
        Microsoft's self-service GitHub management portal is implemented in TypeScript and is{' '}
        a Node.js service. The portal is open source at <a
          href="https://github.com/microsoft/opensource-portal"
          rel="noopener"
          target="_blank">https://github.com/microsoft/opensource-portal</a>.
      </p>
      <h4 className="h4">ClearlyDefined</h4>
      <p><a target="_blank"
        rel="noopener"
        href="https://clearlydefined.io/">ClearlyDefined</a>{' '}
        provides license, source location, and attribution information on over 10 million{' '}
        open source components. We rely on this data for our compliance systems.</p>
      <p>
        This open source project provides compliance data about open source components from across the package ecosystems.{' '}
        It uses multiple open source scanners and summarizes their results into a high-quality "definition" of the component{' '}
        upon which we base our business policy decisions internally. It also:
      </p>
      <ul className="ul mt-4">
        <li>
          <b>Enables crowd-sourced curation:</b> In cases where the data about a component is missing or incomplete, the project facilitates{' '}
          community curation of the data in order to improve it. This process is all done transparently and with multiple community reviewers.
        </li>
        <li>
          <b>Facilitates data improvements upstream:</b> Over time, the corpus of ClearlyDefined curations are intended to be submitted back to{' '}
          the upstream projects as pull requests so that future versions of the component are more clearly defined.
        </li>
      </ul>
      <p>
        ClearlyDefined is an open source project of the Open Source Initiative (OSI) and{' '}
        its open source code is at <a href="https://github.com/clearlydefined" target="_blank">https://github.com/clearlydefined</a>.
      </p>
      <h4 className="h4">Microsoft's Contributor License Agreement (CLA) </h4>
      <p>
        The <a href="https://github.com/microsoft/ContributorLicenseAgreement"
          rel="noopener"
          target="_blank" className="external">Microsoft's Contributor License Agreement</a>{' '}
        is a Contributor License Agreement solution that integrates{' '}
        nicely with GitHub to make sure that all contributors to a project{' '}
        have agreed to common terms by enabling contributors to sign CLAs from within a pull request.
      </p>
      <h4 className="h4">GitHub data crawling</h4>
      <p>
        Microsoft has developed and adopted several different approaches to{' '}
        retrieving GitHub data about activity within our organizations: we use{' '}
        the GitHub REST API v3 and GraphQL to regularly make data about{' '}
        our GitHub repos, traffic data, issues and pull requests all available inside{' '}
        our big data systems.
      </p>
      <p>
        By making data available in Azure Data Explorer, powered by Kusto, it's{' '}
        really quick for Microsoft engineers to be able to query data without having to{' '}
        build specialized GitHub API integrations.
      </p>
      <p>
        <em>Microsoft's 1ES team is in the process of open sourcing this technology.</em></p>
      <h4 className="h4">Business review process with Azure Boards</h4>
      <p>
        Our business and legal review process - kicked off when a particular open source{' '}
        use, contribution, or release, scenario requires - integrates into the engineering{' '}
        system that includes Azure Boards. This helps meet engineers where they are,{' '}
        providing an easy way to review requirements, manage approvals and workflow,{' '}
        and eventually completing any necessary reviews.
      </p>
      <p>
        This system is built by using the{' '}
        <a href="https://learn.microsoft.com/azure/devops/reference/add-modify-wit?view=azure-devops-2020"
          rel="noopener"
          target="_blank">Work Item Tracking extensibility features</a>{' '}
        and the <a href="https://learn.microsoft.com/rest/api/azure/devops/wit/?view=azure-devops-rest-5.1"
          rel="noopener"
          target="_blank">Azure DevOps REST API</a>.
      </p>
    </div>
  );
}
