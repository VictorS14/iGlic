const extractDateStr = (el) => {
  if (el.date_only) return el.date_only;

  const date = el.measure_at instanceof Date ? el.measure_at : new Date(el.measure_at);
  if (isNaN(date.getTime())) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const formatForDisplay = (dataStr) => {
  const [year, month, day] = dataStr.split("-");
  return `${day}-${month}-${year}`
}

export const groupByDate = (data) => {
  const groupedData = data.reduce((acc, el) => {
    const dataStr = extractDateStr(el);
    if (!dataStr) return acc;

    let grupoExistente = acc.find((grupo) => grupo._isoDate === dataStr);

    if (!grupoExistente) {
      grupoExistente = {
        _isoDate: dataStr,
        data: formatForDisplay(dataStr),
        timestamp: el.timestamp,
        registros: [],
      };
      acc.push(grupoExistente);
    }

    grupoExistente.registros.push({
      id: el.id,
      value: el.value,
      timestamp: el.timestamp,
    });

    return acc;
  }, []);

  return groupedData.map((group) => {
    return {
      ...group,
      media: calculateAverage(group.registros),
    };
  });
};

const calculateAverage = (registros) => {
  if (!registros || registros.length === 0) return 0;
  const total = registros.reduce((acc, reg) => acc + Number(reg.value), 0);
  return (total / registros.length).toFixed(0);
};
