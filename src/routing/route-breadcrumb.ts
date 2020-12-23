interface IBreadcrumb {
    name: string,
    url: string
  }
  export interface IRouteBreadcrumb {
    path: string[],
    breadcrumbs: IBreadcrumb[]
  }
  export const routes: IRouteBreadcrumb[] = [
    {
        path: [
         "/clinician/dashboard"
        ],
        breadcrumbs: [  
          { name: 'Dashboard', url: '/clinician/patientdashboard' },
        ]
      },
      {
        path: [
         "/clinician/patientmanagement"
        ],
        breadcrumbs: [  
          { name: 'Patient Management', url: '/clinician/patientmanagement' },
        ]
      },
      {
        path: [
         "/clinician/patientdashboard"
        ],
        breadcrumbs: [  
          { name: 'Patient Dashboard', url: '/clinician/patientdashboard' },
        ]
      },
      {
        path: [
         "/clinician/patientregistration"
        ],
        breadcrumbs: [  
          { name: 'Add Update Patient', url: '/clinician/patientregistration' },
        ]
      },
      {
        path: [
         "/user"
        ],
        breadcrumbs: [  
          { name: 'user', url: '/user' },
        ]
      },
      {
        path: [
         "/medical/medicalhistory"
        ],
        breadcrumbs: [  
          { name: 'Medical History', url: '/medical/medicalhistory' },
        ]
      },
  
    ];
