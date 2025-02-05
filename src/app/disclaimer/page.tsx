// src/app/disclaimer/page.tsx
export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Disclaimer</h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            The information provided on this website—including data and details related to approved and categorized journals sourced from the Higher Education Commission (HEC) Pakistan—is for general informational purposes only. While we strive to ensure the accuracy and reliability of the information presented, we make no warranties or representations of any kind, express or implied, regarding its completeness, accuracy, reliability, or currency. All information is provided on as it is basis without any guarantee of updates or corrections.
          </p>
          <p>
            <strong>No Affiliation or Endorsement</strong>
            <br />
            This website is an independent resource and is not affiliated with, endorsed by, or officially connected to the Higher Education Commission (HEC) Pakistan or any other governmental, academic, or research organization. The use of any trademarks, service marks, logos, or copyrighted material displayed on this site is for informational purposes only. Any such use does not imply any affiliation, endorsement, or approval by the respective owner.
          </p>
          <p>
            <strong>Limitation of Liability</strong>
            <br />
            Under no circumstances shall the website owner, contributors, or any affiliated parties be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this website or reliance on any information provided herein. Users of this website assume full responsibility for verifying any information obtained from this site and for any decisions made based on the content provided.
          </p>
          <p>
            <strong>User Responsibility</strong>
            <br />
            It is the responsibility of the user to independently verify the information provided on this website with the official HEC Pakistan sources or other authoritative entities before making any decisions or taking any actions based on the content available here. This website does not provide legal, academic, or professional advice, and no attorney-client, academic-advisor, or other professional relationship is created by your use of this site.
          </p>
          <p>
            <strong>Acceptance of Terms</strong>
            <br />
            By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer. If you do not agree with any part of this disclaimer, you should refrain from using the website.
          </p>
        </div>
      </div>
    </div>
  );
}
