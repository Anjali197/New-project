export interface test {
  propertyName: string;
  propertyId: string;
  propertyAddress: string;
  defaultCheckIn: Date;
  defaultCheckOut: Date;
  defaultAdultCount: number;
}
export interface SearchResult {
  airportCode: string;
  airportId: number;
  airportName: string;
  cityCode: string;
  cityName: string;
  countryCode: string;
  countryName: string;
}
export interface genderTest{
  optionId: number;
  label: string;
  option: string;
}
export interface employeeTypeTest{
  optionId: number;
  label: string;
  option: string;
}
export interface designationTest{
  optionId: number;
  label: string;
  option: string;
}