export const userRoleToString = (roleNumber: number): string => {
  switch (roleNumber) {
    case 0:
      return 'Admin';
    case 1:
      return 'Customer';
    default:
      return 'Unknown role';
  }
};

export const mapToPickerData = (data: any[], valueAttr: string, labelAttr: string) => {
  return data.map((e) => {
    return {
      value: e[valueAttr],
      label: e[labelAttr]
    };
  });
};
