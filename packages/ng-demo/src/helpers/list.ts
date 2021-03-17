export const ListData = () => {
    const countryList = ["España", "Estados unidos", "Canada", "Francia", "Irlanda", "Croacia", "Corea", "Taiwan"].map(
        country => ({
            name: country,
            amount: Math.random() * 10000 - 1,
            growth_amount: Math.random()
        })
    );
    return [
        {
            _isTotal: true,
            name: "total",
            amount: Math.random() * 10000 - 1,
            growth_amount: Math.random()
        }
    ].concat(countryList as any);
};
