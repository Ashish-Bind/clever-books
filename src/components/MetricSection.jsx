import Metric from './Metric'

const MetricsSection = () => {
  const metrics = [
    { value: 90, label: 'Job Matching Success', unit: '%' },
    { value: 4500, label: 'User Satisfaction', unit: 'people' },
    { value: 150, label: 'Community and Networking', unit: 'community' },
  ]

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Result speaks for themselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Metric
              key={index}
              value={metric.value}
              label={metric.label}
              unit={metric.unit}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection
