export interface MedicationListViewModel{
    id:string | null;
    family : string;
    brandName : string;
    genericName: string;
    dosage: string;
    format: string;
    duration : string;
    release: string;
    isActive:boolean;
}