import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seoConfig } from "@/config/seo";

const TermosDeUso = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-3xl mx-auto px-6 py-16">
                {/* Back Button */}
                <Link to="/">
                    <Button variant="ghost" className="mb-8 text-gold hover:text-gold/80">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Button>
                </Link>

                <h1 className="text-4xl font-black text-gold mb-8">Termos de Uso</h1>

                <div className="prose prose-invert prose-gold max-w-none space-y-6 text-foreground/80">
                    <p className="text-muted-foreground">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e usar a {seoConfig.siteName}, você concorda em cumprir e estar vinculado a estes Termos de Uso.
                            Se você não concordar com qualquer parte destes termos, não poderá acessar o serviço.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Descrição do Serviço</h2>
                        <p>
                            A {seoConfig.siteName} é uma comunidade online que oferece conteúdo educacional sobre Inteligência Artificial
                            para empresários, incluindo lives semanais, templates, tutoriais e acesso a uma comunidade exclusiva.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Assinatura e Pagamento</h2>
                        <p>
                            O acesso à comunidade requer uma assinatura paga. Os valores e condições estão descritos na página de preços.
                            O pagamento é processado de forma segura através da plataforma Kiwify.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Plano Mensal: cobrança mensal recorrente</li>
                            <li>Plano Anual: cobrança anual com desconto</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Cancelamento</h2>
                        <p>
                            Você pode cancelar sua assinatura a qualquer momento. O acesso continuará disponível até o fim do período já pago.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Uso Aceitável</h2>
                        <p>Você concorda em não:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Compartilhar seu acesso com terceiros</li>
                            <li>Redistribuir ou revender o conteúdo da comunidade</li>
                            <li>Usar o serviço para fins ilegais ou não autorizados</li>
                            <li>Violar direitos de propriedade intelectual</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo disponibilizado na comunidade, incluindo textos, vídeos, templates e materiais,
                            é de propriedade exclusiva da {seoConfig.siteName} e protegido por leis de direitos autorais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Limitação de Responsabilidade</h2>
                        <p>
                            Os resultados obtidos com a aplicação do conhecimento compartilhado na comunidade podem variar.
                            Não garantimos resultados específicos de faturamento ou crescimento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Contato</h2>
                        <p>
                            Para dúvidas sobre estes termos, entre em contato através das nossas redes sociais ou canais oficiais.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermosDeUso;
