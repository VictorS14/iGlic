export const groupByDate = (data) => {
  const groupedData = data.reduce((acc, el) => {
    let dataStr;
    if (el.measure_at instanceof Date) {
      dataStr = el.measure_at.toISOString().split("T")[0];
    } else if (typeof el.measure_at === "string") {
      dataStr = el.measure_at.split("T")[0];
    } else {
      return acc;
    }

    let grupoExistente = acc.find((grupo) => grupo.data === dataStr);

    if (!grupoExistente) {
      grupoExistente = {
        data: dataStr,
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
