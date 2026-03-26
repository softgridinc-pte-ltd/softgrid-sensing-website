interface ProductInvolved {
  product: string
  series: string
  role: string
  optional?: boolean
}

interface ProductsInvolvedSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  products: ProductInvolved[]
}

function getSeriesBadgeStyle(series: string): React.CSSProperties {
  if (series.includes('Fusion')) return { background: '#EBF5FA', color: '#197EA3', border: '1px solid #A5D5E9' }
  if (series.includes('Orches')) return { background: '#FFF7ED', color: '#C2410C', border: '1px solid #FED7AA' }
  if (series.includes('Cortex')) return { background: '#F5F3FF', color: '#7C3AED', border: '1px solid #DDD6FE' }
  if (series.includes('Sense')) return { background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0' }
  return { background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0' }
}

const thStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 2,
  color: '#64748B',
  textAlign: 'left',
  padding: '14px 20px',
  borderBottom: '2px solid #E2E8F0',
}

const tdStyle: React.CSSProperties = {
  fontSize: 15,
  color: '#334155',
  padding: '16px 20px',
  borderBottom: '1px solid #F1F5F9',
}

export function ProductsInvolvedSection({
  overline = 'Products Involved',
  headline,
  subtitle,
  products,
}: ProductsInvolvedSectionProps): React.ReactElement {
  return (
    <section style={{ padding: '80px 64px', background: '#FFFFFF' }}>
      <div data-animate style={{ textAlign: 'center', marginBottom: 40 }}>
        <span
          style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            color: '#64748B',
            marginBottom: 12,
          }}
        >
          {overline}
        </span>
        {headline && (
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -1,
              color: '#0A1628',
              textAlign: 'center',
            }}
          >
            {headline}
          </h2>
        )}
        {subtitle && (
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: '#475569',
              marginTop: 12,
              maxWidth: 672,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div data-animate style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            maxWidth: 1100,
            margin: '0 auto',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Series</th>
              <th style={thStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.product} className="hover:bg-slate-50" style={{ transition: 'background-color 0.15s' }}>
                <td style={{ ...tdStyle, fontWeight: 600, color: '#0A1628' }}>{p.product}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 600,
                      ...getSeriesBadgeStyle(p.series),
                    }}
                  >
                    {p.series}
                  </span>
                </td>
                <td style={tdStyle}>
                  {p.role}
                  {p.optional && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        color: '#94A3B8',
                        background: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        borderRadius: 100,
                        padding: '2px 10px',
                        marginLeft: 8,
                      }}
                    >
                      Optional
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
